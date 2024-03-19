export const onChangeHexColor = (event, setInput, setCheck) => {
    const reg = /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i
    const text = event.target.value
    setInput(text)
    if (!reg.test(text)){
        if (text.length <= 6){
            setCheck(false)
        }
        else {
            setCheck(true)
        }
    }
    else {
        if (text.length <= 0){
            setCheck(false)
        }
        setCheck(true)
    }
}