import { Place } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@pankod/refine-mui"
import { Link } from "@pankod/refine-react-router-v6"
import { PropertyCardProps } from 'interfaces/property'

const PropertyCard = ({ id, title, price, location, photo, width }: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        maxWidth: width ? `${width}px` : "320px",
        width: "100%",
        padding: "10px",
        backgroundColor: "var(--card)",
        "&:hover": {
          boxShadow: "var(--shadow-lg)",
        },
        cursor: "pointer",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={200}
        image={photo}
        alt={title}
        sx={{ borderRadius: '10px', marginBottom: '5px' }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          padding: "5px",
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography
            fontSize={16}
            fontWeight={500}
            color="var(--foreground)"
          >
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place
              sx={{
                fontSize: 18,
                color: "var(--muted-foreground)",
                marginTop: 0.5,
              }}
            />
            <Typography fontSize={14} color="var(--muted-foreground)">
              {location}
            </Typography>
          </Stack>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bgcolor="var(--accent)"
          height="fit-content"
        >
          <Typography
            fontSize={12}
            fontWeight={600}
            color="var(--accent-foreground)"
          >
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PropertyCard