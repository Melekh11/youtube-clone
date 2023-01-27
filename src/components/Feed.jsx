import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = (
      pageToken = undefined,
      counter = 0,
      videosData = []
    ) => {
      const prefPageToken = pageToken ? `&pageToken=${pageToken}` : "";

      if (counter < 3) {
        fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}&maxResult=25${prefPageToken}`
        ).then((data) => {
          fetchVideos(data.nextPageToken, counter + 1, [
            ...videosData,
            ...data.items,
          ]);
        });
      } else if (counter === 3) {
        setVideos(videosData);
      }
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5 }}>
          Maty Melekh, 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <span style={{ color: "#F31530" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
