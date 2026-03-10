import { useList, useCustom } from "@pankod/refine-core";

import { Box, Stack, Typography } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  // TopAgent,
} from "components";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api/v1";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 3,
      },
    },
  });

  const { data: dashboardData } = useCustom({
    url: `${API_URL}/dashboard`,
    method: "get",
  });

  const latestProperties = Array.isArray(data?.data) ? data.data : [];
  const stats = dashboardData?.data as any;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error</Typography>;
  }

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box
        gap={{ xs: 2, sm: 4 }}
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <PieChart
          title="Properties for Sale"
          value={stats?.propertiesForSale ?? 0}
          series={[stats?.propertiesForSale ?? 60, stats?.propertiesForRent ?? 40]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={stats?.propertiesForRent ?? 0}
          series={[stats?.propertiesForRent ?? 40, stats?.propertiesForSale ?? 60]}
          colors={["#fd8539", "#c4e8ef"]}
        />
        <PieChart
          title="Total Customers"
          value={stats?.totalUsers ?? 0}
          series={[stats?.totalUsers ?? 1, Math.max(1, (stats?.totalProperties ?? 1) - (stats?.totalUsers ?? 0))]}
          colors={["#2ed480", "#c4e8ef"]}
        />
        <PieChart
          title="Total City"
          value={stats?.totalCities ?? 0}
          series={[stats?.totalCities ?? 1, Math.max(1, (stats?.totalProperties ?? 1))]}
          colors={["#fe6d8e", "#c4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding={{ xs: "10px", sm: "20px" }}
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize={20} fontWeight={600} color="#11142D">
          Latest Properties
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, sm: 4 } }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property._id}
              title={property.title}
              price={property.price}
              photo={property.photo}
              location={property.location}
              width={300}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
