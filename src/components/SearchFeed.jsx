import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();


  useEffect(() => {
    const fetchVideos = (
      pageToken = undefined,
      counter = 0,
      videosData = []
    ) => {
      const prefPageToken = pageToken ? `&pageToken=${pageToken}` : "";

      if (counter < 3) {
        fetchFromAPI(
          `search?part=snippet&q=${searchTerm}&maxResult=25${prefPageToken}`
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
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search results for <span style={{ color: "#F31530" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
