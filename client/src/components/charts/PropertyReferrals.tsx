import { Box, Stack, Typography } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "constants/index";


interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps ) => (
  <Box width="100%">
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography fontSize={16} fontWeight={500} color="#11142d">{title}</Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d">{percentage}</Typography>
    </Stack>
    <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#e4e8ef">
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
      minHeight={490}
      minWidth="30%"
      p={4}
      bgcolor="#fcfcfc"
      borderRadius="15px"
      display="flex"
      flexDirection="column"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
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
