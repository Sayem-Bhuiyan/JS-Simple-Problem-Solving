// check the photo name is validName or not
function isValidPhotoName( photoName, imageExtensions){
    if (typeof photoName !== 'string' || !Array.isArray(imageExtensions)){
        return 'Please provide a valid inputs';
    }
    else {
        for (let item of imageExtensions){
            if(photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true;
            }
           
        }
        return false;
    }
}

const photoName = 'download.JPG';
const extentionName = ['.jpg', '.jpeg', '.png', 'gif', '.ico']
const imageName = isValidPhotoName(photoName, extentionName);
console.log(imageName);