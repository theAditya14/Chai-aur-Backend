import multer from 'multer'

const storage = multer.diskStorage({
    destination : function(req,file,cd){
        cd(null, "./Public/temp")
    },
    filename : function(req,file,cd){
        cd(null,file.originalname)
    }
})

const upload = multer({
    storage,
})

export default upload