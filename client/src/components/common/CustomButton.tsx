import { Button } from "@pankod/refine-mui";
import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  handleClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "0.8rem 1rem",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor: backgroundColor ?? "var(--primary)",
        color: color ?? "var(--primary-foreground)",
        fontSize: "0.95rem",
        fontWeight: 600,
        gap: "0.6rem",
        textTransform: "capitalize",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow-sm)",
        "&:hover": {
          opacity: 0.95,
          backgroundColor: backgroundColor ?? "var(--primary)",
          boxShadow: "var(--shadow-md)",
        },
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton