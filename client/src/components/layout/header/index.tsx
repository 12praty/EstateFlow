// import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  Stack,
  Toolbar,
  // Typography,
  // IconButton,
  Avatar,
  Chip,
} from "@pankod/refine-mui";
// import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

// import { ColorModeContext } from "contexts";

export const Header: React.FC = () => {
  // const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true;

  return shouldRenderHeader ? (
    <AppBar
      color="transparent"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "var(--background)",
        boxShadow: "none",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* <IconButton
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton> */}
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.name ? (
              <Chip
                label={user?.name}
                clickable
                variant="outlined"
                sx={{
                  borderColor: "var(--border)",
                  color: "var(--muted-foreground)",
                  "& .MuiChip-label": { fontWeight: 500 },
                }}
                avatar={
                  <Avatar
                    sx={{
                      width: 28,
                      height: 28,
                      fontSize: 14,
                      bgcolor: "var(--primary)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    {user?.name[0]}
                  </Avatar>
                }
              />
            ) : null}
            {user?.avatar ? (
              <Avatar
                src={user?.avatar}
                alt={user?.name}
                sx={{
                  width: 32,
                  height: 32,
                  border: "2px solid var(--border)",
                }}
              />
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
