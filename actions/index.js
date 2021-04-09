const PORTRAITS = [
    { url: '/../public/portraits/port1.jpg', width: '2000', height: '1331' },
    { url: '/../public/portraits/port2.jpg', width: '2000', height: '1331'  },
    { url: '/../public/portraits/port3.jpg', width: '2000', height: '1080'  },
    { url: '/../public/portraits/port4.jpg', width: '2000', height: '1248'  },
    { url: '/../public/portraits/port5.jpg', width: '2000', height: '1331'  },
    { url: '/../public/portraits/port6.jpg', width: '2000', height: '1331'  },
    { url: '/../public/portraits/port7.jpg', width: '2000', height: '1123'  },
    { url: '/../public/portraits/port8.jpg', width: '2000', height: '1316'  },
    { url: '/../public/portraits/port9.jpg', width: '2000', height: '1331'  },
    { url: '/../public/portraits/port10.jpg', width: '2000', height: '1375'  },
]


export const importFood = () => {
    return new Promise((resolve, reject) => {
        // first arg is a function, second arg is the time
        setTimeout(() => {
            resolve(GALLERY)
            // reject('Cannot fetch data.')
        }, 50)
    })
}
