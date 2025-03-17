export function Button(props: React.ComponentProps<"button">) {
  return <div className={props.className}>{props.children}</div>;
}
