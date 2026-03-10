import { Box, Stack, Typography } from "@pankod/refine-mui"
import { useShow, useDelete, useGetIdentity } from "@pankod/refine-core"
import { useNavigate, useParams } from "@pankod/refine-react-router-v6"
import { ChatBubble, Delete, Edit, Phone, Place, Star } from "@mui/icons-material"
import { CustomButton } from "components"

function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();
  
  
  const { data, isLoading, isError } = queryResult;
  
  const propertyDetails = data?.data ?? {};

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Something went wrong!</Typography>;
  }

  const isCurrentUser = user?.email === propertyDetails?.creator?.email;

  const handleDeleteProperty = () => {
    const response = window.confirm("Are you sure you want to delete this property?");
    if (response) {
      mutate(
        {
          resource: "properties",
          id: id as string,
        },
        {
          onSuccess: () => {
            navigate("/properties");
          },
        }
      );
    }
  };
  
  return (
    <Box
      borderRadius="var(--radius)"
      bgcolor="var(--card)"
      padding={{ xs: "10px", sm: "20px" }}
      width="100%"
    >
      <Typography fontSize={25} fontWeight={700} color="var(--foreground)">
        Details
      </Typography>
      <Box
        mt="20px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Box flex={1} maxWidth={{ xs: "100%", lg: 764 }}>
          <img
            src={propertyDetails.photo}
            alt={propertyDetails.title}
            style={{
              width: "100%",
              maxHeight: 546,
              objectFit: "cover",
              borderRadius: "10px",
            }}
            className="property_details-img"
          />

          <Box mt="15px">
            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
              alignItems="center"
            >
              <Typography
                fontSize={18}
                fontWeight={500}
                color="var(--foreground)"
                textTransform="capitalize"
              >
                {propertyDetails.propertyType}
              </Typography>
              <Box>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} sx={{ color: "#f2c94c" }} />
                ))}
              </Box>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              flexWrap="wrap"
              alignItems={{ xs: "flex-start", sm: "center" }}
              gap={2}
            >
              <Box>
                <Typography
                  fontSize={{ xs: 18, sm: 22 }}
                  fontWeight={600}
                  color="var(--foreground)"
                  textTransform="capitalize"
                  mt="10px"
                >
                  {propertyDetails.title}
                </Typography>
                <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                  <Place sx={{ color: "var(--muted-foreground)" }} />
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    color="var(--muted-foreground)"
                    textTransform="capitalize"
                  >
                    {propertyDetails.location}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Typography
                  fontSize={16}
                  fontWeight={600}
                  mt="10px"
                  color="var(--foreground)"
                >
                  Price
                </Typography>
                <Stack direction="row" alignItems="flex-end" gap={1}>
                  <Typography
                    fontSize={{ xs: 20, sm: 25 }}
                    fontWeight={700}
                    color="var(--primary)"
                  >
                    ${propertyDetails.price}
                  </Typography>
                  <Typography
                    fontSize={14}
                    color="var(--muted-foreground)"
                    mb={0.5}
                  >
                    for one day
                  </Typography>
                </Stack>
              </Box>
            </Stack>

            <Stack mt="25px" direction="column" gap="10px">
              <Typography fontSize={18} color="var(--foreground)">
                Description
              </Typography>
              <Typography fontSize={14} color="var(--muted-foreground)">
                {propertyDetails.description}
              </Typography>
            </Stack>
          </Box>
        </Box>
        
        <Box
          width="100%"
          flex={1}
          maxWidth={{ xs: "100%", lg: 326 }}
          display="flex"
          flexDirection="column"
          gap="20px"
        >
            <Stack
              width="100%"
              p={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              border="1px solid var(--border)"
              borderRadius="var(--radius)"
            >
            <Stack
              mt={2}
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <img
                src={
                  checkImage(propertyDetails?.creator?.avatar)
                    ? propertyDetails?.creator?.avatar
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
                alt="avatar"
                width={90}
                height={90}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />

              <Box mt="15px">
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color="var(--foreground)"
                >
                  {propertyDetails?.creator?.name}
                </Typography>
                <Typography
                  mt="5px"
                  fontSize={14}
                  fontWeight={400}
                  color="var(--muted-foreground)"
                >
                  Agent
                </Typography>
              </Box>

              <Stack mt="15px" direction="row" alignItems="center" gap={1}>
                <Place sx={{ color: "var(--muted-foreground)" }} />
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  color="var(--muted-foreground)"
                >
                  Delhi, India
                </Typography>
              </Stack>

              <Typography
                mt={1}
                fontSize={16}
                fontWeight={600}
                color="var(--foreground)"
              >
                {propertyDetails?.creator?.allProperties?.length ?? 0} Properties
              </Typography>
            </Stack>

            <Stack
              width="100%"
              mt="25px"
              direction={{ xs: "column", sm: "row" }}
              flexWrap="wrap"
              gap={2}
            >
              <CustomButton
                title={!isCurrentUser ? "Message" : "Edit"}
                backgroundColor="#475BE8"
                color="var(--primary-foreground)"
                fullWidth
                icon={!isCurrentUser ? <ChatBubble /> : <Edit />}
                handleClick={() => {
                  if (isCurrentUser) {
                    navigate(`/properties/edit/${propertyDetails._id}`);
                  }
                }}
              />
              <CustomButton
                title={!isCurrentUser ? "Call" : "Delete"}
                backgroundColor={!isCurrentUser ? "#2ED480" : "#d42e2e"}
                color="var(--primary-foreground)"
                fullWidth
                icon={!isCurrentUser ? <Phone /> : <Delete />}
                handleClick={() => {
                  if (isCurrentUser) handleDeleteProperty();
                }}
              />
            </Stack>
          </Stack>

          <Stack>
            <img
              src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
              width="100%"
              height={306}
              style={{ borderRadius: 10, objectFit: "cover" }}
              alt="map"
            />
          </Stack>

          <Box>
            <CustomButton
              title="Book Now"
              backgroundColor="#475BE8"
              color="var(--primary-foreground)"
              fullWidth
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;