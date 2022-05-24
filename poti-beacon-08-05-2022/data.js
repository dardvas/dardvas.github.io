var APP_DATA = {
  "scenes": [
    {
      "id": "0-top",
      "name": "Top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.36183913571498927,
          "pitch": 0.7467098844386726,
          "rotation": 0,
          "target": "1-top-platform"
        },
        {
          "yaw": -1.4248498551535747,
          "pitch": 0.9035974534783779,
          "rotation": 0,
          "target": "2-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-top-platform",
      "name": "Top platform",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.096739446343328,
          "pitch": 0.50133615728301,
          "rotation": 0,
          "target": "0-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-outside",
      "name": "Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7408190787647335,
          "pitch": 0.004213545881809111,
          "rotation": 0,
          "target": "0-top"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Poti beacon 8 May",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
