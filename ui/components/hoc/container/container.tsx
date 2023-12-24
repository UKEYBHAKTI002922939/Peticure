import { ComponentPropsWithoutRef } from "react";

/**
 * A functional component that renders a container div with the provided children.
 * @ {ComponentPropsWithoutRef<"div">} children - The children elements to render inside the container.
 * @ The rendered container div element.
 */
function Container({ children }: ComponentPropsWithoutRef<"div">) {
  return <div className="container">{children}</div>;
}

export default Container;
