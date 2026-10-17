window.ALAD_CONFIG = {
  "stageWidth": 1920,
  "stageHeight": 1080,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": true,
  "clockTimezone": "America/Lima",
  "projectId": "p_mv8lp48pvhs8lj",
  "backgrounds": [
    {
      "id": "b_mvcrebi5m9uncv",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mv8lp48pvhs8lj/1792263682003_whatsapp_video_2026-10-17_at_13.52.26.mp4",
      "duration": 8,
      "breakpoints": null,
      "condition": null
    }
  ],
  "resources": [
    {
      "id": "r_mv8lqyxguox4sk",
      "type": "countdown",
      "target": "2026-10-30T05:00:00.000Z",
      "tokenPrefix": "cuenta-regresiva-1"
    }
  ],
  "weather": {
    "enabled": true,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [],
  "elements": [
    {
      "id": "e_mv8lrksjvgw748",
      "resourceId": "r_mv8lqyxguox4sk",
      "type": "countdown",
      "enabled": true,
      "x": 24.8,
      "y": 32.8,
      "width": 15.7,
      "height": 21.4,
      "align": "center",
      "zIndex": 2,
      "fontSize": 170,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "OhnoSoftie-Regular",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "countdownTarget": "2026-11-13T21:09:10.531Z",
      "countdownLabels": false,
      "padZero": true,
      "countdownShowDays": true,
      "countdownShowHours": false,
      "countdownShowMinutes": false,
      "countdownShowSeconds": false
    },
    {
      "id": "e_mv8lvz5wnhxvyx",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 24.5,
      "y": 51.7,
      "width": 15.6,
      "height": 17.8,
      "align": "center",
      "zIndex": 2,
      "fontSize": 115,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "OhnoSoftie-Regular",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "text": "días"
    }
  ]
};
