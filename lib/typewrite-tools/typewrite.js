export const typewrite = async (id, text, delay = 100) => {
    const element = document.querySelector(`#${id}`);
    for(const char of text){
        await new Promise(resolve => setTimeout(resolve, delay));
        element.textContent += char;
    }
}
