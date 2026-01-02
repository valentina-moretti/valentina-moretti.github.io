import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

type FloatingDockItem = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

type DockDirection = "horizontal" | "vertical";

export const FloatingDock = ({
  items,
  direction = "horizontal",
  desktopClassName,
  mobileClassName,
}: {
  items: FloatingDockItem[];
  direction?: DockDirection;
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        direction={direction}
        className={desktopClassName}
      />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                {item.onClick ? (
                  <button
                    type="button"
                    onClick={item.onClick}
                    aria-label={item.title}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur"
                  >
                    <div className="h-4 w-4 text-muted-foreground">{item.icon}</div>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    key={item.title}
                    aria-label={item.title}
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur"
                  >
                    <div className="h-4 w-4 text-muted-foreground">{item.icon}</div>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-muted-foreground" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  direction,
  className,
}: {
  items: FloatingDockItem[];
  direction: DockDirection;
  className?: string;
}) => {
  let mouse = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouse.set(direction === "vertical" ? e.pageY : e.pageX)}
      onMouseLeave={() => mouse.set(Infinity)}
      className={cn(
        direction === "vertical"
          ? "hidden w-14 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background/80 px-2 py-3 backdrop-blur md:flex"
          : "hidden h-16 items-end gap-4 rounded-2xl border border-border bg-background/80 px-4 pb-3 backdrop-blur md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouse={mouse}
          direction={direction}
          key={item.title}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouse,
  direction,
  title,
  icon,
  href,
  external,
  onClick,
}: {
  mouse: MotionValue;
  direction: DockDirection;
  title: string;
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouse, (val) => {
    const bounds =
      ref.current?.getBoundingClientRect() ??
      ({ x: 0, y: 0, width: 0, height: 0 } as DOMRect);

    return direction === "vertical"
      ? val - bounds.y - bounds.height / 2
      : val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [34, 68, 34]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [34, 68, 34]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [16, 32, 16]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [16, 32, 16]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className="relative flex aspect-square items-center justify-center"
    >
      {onClick ? (
        <motion.button
          type="button"
          aria-label={title}
          onClick={onClick}
          style={{ width, height }}
          className="flex aspect-square items-center justify-center rounded-full bg-muted text-muted-foreground"
        >
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className="flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </motion.button>
      ) : (
        <a
          href={href}
          aria-label={title}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <motion.div
            style={{ width, height }}
            className="flex aspect-square items-center justify-center rounded-full bg-muted text-muted-foreground"
          >
            <motion.div
              style={{ width: widthIcon, height: heightIcon }}
              className="flex items-center justify-center"
            >
              {icon}
            </motion.div>
          </motion.div>
        </a>
      )}
    </motion.div>
  );
}
