var APP_DATA = {
  "scenes": [
    {
      "id": "0----",
      "name": "Купол входа с парковки",
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
          "yaw": 3.0845416391373597,
          "pitch": -0.015176097282774137,
          "rotation": 0,
          "target": "1---"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0866695372490245,
          "pitch": 0.23389703067087453,
          "title": "",
          "text": "Внутрь можно попасть через этот купол. В нем эскалатор под землю, где расположен тоннель, который ведет к самой мечети"
        }
      ]
    },
    {
      "id": "1---",
      "name": "Снаружи на углу",
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
          "yaw": -2.128821906097734,
          "pitch": -0.020556912913873404,
          "rotation": 0,
          "target": "0----"
        },
        {
          "yaw": 1.522368713897083,
          "pitch": 0.06818039561520095,
          "rotation": 0,
          "target": "2--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--",
      "name": "Возле арки",
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
          "yaw": -1.5691262769430558,
          "pitch": -0.006667256818342793,
          "rotation": 0,
          "target": "1---"
        },
        {
          "yaw": 0.006981646582104872,
          "pitch": -0.021987069530123193,
          "rotation": 0,
          "target": "3---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3---",
      "name": "Арка главного входа",
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
          "yaw": -1.5646701189547514,
          "pitch": 0.12826275253640773,
          "rotation": 0,
          "target": "2--"
        },
        {
          "yaw": 1.6840103775696154,
          "pitch": 0.14371265511753606,
          "rotation": 0,
          "target": "4--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4--",
      "name": "Внутренний двор",
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
          "yaw": 2.9702314071262386,
          "pitch": 0.19033696045936743,
          "rotation": 0,
          "target": "3---"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08092542788198642,
          "pitch": 0.39564334168071724,
          "title": "Мечеть шейха Зайда",
          "text": "<div>Мечеть шейха Зайда (араб. مسجد الشيخ زايد‎) — одна из шести самых больших мечетей в мире. Расположена в Абу-Даби, столице Объединенных Арабских Эмиратов. Названа в честь шейха Зайда ибн Султана ан-Нахайяна — основателя и первого президента Объединенных Арабских Эмиратов, похороненного рядом. Мечеть была официально открыта в месяц Рамадан в 2007 году.</div><div><br></div>"
        }
      ]
    }
  ],
  "name": "Sheikh Zayed Grand Mosque",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
