import { Box, Stack, Typography } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "constants/index";


interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        fontSize={16}
        fontWeight={500}
        color="var(--foreground)"
      >
        {title}
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={500}
        color="var(--foreground)"
      >
        {percentage}
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      borderRadius={1}
      bgcolor="var(--muted)"
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position="absolute"
        height="100%"
        borderRadius={1}
      />
    </Box>
  </Box>
);

const PropertyReferrals = () => {
  return (
    <Box
      id="chart"
      minHeight={{ xs: "auto", sm: 490 }}
      minWidth={{ xs: "100%", md: "30%" }}
      p={{ xs: 2, sm: 4 }}
      bgcolor="var(--card)"
      borderRadius="var(--radius)"
      display="flex"
      flexDirection="column"
    >
      <Typography fontSize={18} fontWeight={600} color="var(--foreground)">
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((info) => (
            <ProgressBar
              key={info.title}
              {...info}
            />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
