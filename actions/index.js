const PORTRAITS = [
    { id: 'pt-1', url: '/../public/portraits/port1.jpg', width: '2000', height: '1331' },
    { id: 'pt-2', url: '/../public/portraits/port2.jpg', width: '2000', height: '1331'  },
    { id: 'pt-3', url: '/../public/portraits/port3.jpg', width: '2000', height: '1080'  },
    { id: 'pt-4', url: '/../public/portraits/port4.jpg', width: '2000', height: '1248'  },
    { id: 'pt-5', url: '/../public/portraits/port5.jpg', width: '2000', height: '1331'  },
    { id: 'pt-6', url: '/../public/portraits/port6.jpg', width: '2000', height: '1331'  },
    { id: 'pt-7', url: '/../public/portraits/port7.jpg', width: '2000', height: '1123'  },
    { id: 'pt-8', url: '/../public/portraits/port8.jpg', width: '2000', height: '1316'  },
    { id: 'pt-9', url: '/../public/portraits/port9.jpg', width: '2000', height: '1331'  },
    { id: 'pt-10', url: '/../public/portraits/port10.jpg', width: '2000', height: '1375'  },
]


export const importFood = () => {
    return new Promise((resolve, reject) => {
        // first arg is a function, second arg is the time
        setTimeout(() => {
            resolve(FOOD)
            // reject('Cannot fetch data.')
        }, 10)
    })
}


export const importPortraits = () => {
    return new Promise((resolve, reject) => {
        // first arg is a function, second arg is the time
        setTimeout(() => {
            resolve(PORTRAITS)
            // reject('Cannot fetch data.')
        }, 10)
    })
}