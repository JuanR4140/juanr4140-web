export const typeerase = async (id, delay = 100) => {
    const element = document.querySelector(`#${id}`);
    for(const char of element.textContent){
        await new Promise(resolve => setTimeout(resolve, delay));
        element.textContent = element.textContent.slice(0, -1);
    }
    element.textContent = "‎ ";
}
