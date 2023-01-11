use tiktok::prelude::*;

// Create a TikTok client with the access token
let client = TikTok::with_access_token("YOUR_ACCESS_TOKEN");

// Prepare the video file and metadata for the upload
let video = File::open("path/to/video.mp4")?;
let caption = "Here is my awesome video!";
let hashtags = vec!["awesome", "cool", "video"];

// Upload the video
let res = client.upload_video(video, caption, hashtags)?;

println!("{:?}", res);
