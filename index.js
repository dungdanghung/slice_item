async function PackageSlice(children, numberitemshow, timetotransform, timetoanimation, typeanimation = 'linear') {

    if (timetotransform <= timetoanimation || timetotransform <= 1) {
        throw new Error('props err')
    }
    if (children.childNodes.length != 0) {
        const nl = Array.from(children.childNodes)
        nl.forEach((element, index) => {
            if (index < numberitemshow) {
                element.setAttribute('valuetransform', element.offsetWidth * -(numberitemshow - index))
                element.style.transform = `translateX(${element.attributes.valuetransform.value}px)`
            }
            else {
                element.setAttribute('valuetransform', 0)
                element.style.transform = `translateX(0px)`
            }
            element.style.transition = `all ${typeanimation} ${timetoanimation}s`
        })

        setInterval(() => {
            children.childNodes.forEach((element, index) => {
                if (index < numberitemshow + 1) {
                    let valuetransforms = element.attributes.valuetransform.value
                    valuetransforms = element.attributes.valuetransform.value = valuetransforms - element.offsetWidth
                    element.style.transform = `translateX(calc(${valuetransforms}px)`
                }
            })
            setTimeout(() => {
                children.childNodes[0].style.transform = `translateX(0px)`
                children.childNodes[0].attributes.valuetransform.value = 0
                children.appendChild(children.childNodes[0])
            }, 1000)

        }, timetotransform * 1000)
    }


}

export default PackageSlice