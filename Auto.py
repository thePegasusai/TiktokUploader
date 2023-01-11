from pytiktok import TikTok

# Initialize TikTok object and set the access token
tiktok = TikTok(access_token='YOUR_ACCESS_TOKEN')

# prepare the video and metadata to be uploaded
video = open('path/to/video.mp4', 'rb')
caption = "Here is my awesome video!"
hashtags = ["awesome", "cool", "video"]

# upload the video
result = tiktok.upload_video(video=video, caption=caption, hashtags=hashtags)

print(result)
