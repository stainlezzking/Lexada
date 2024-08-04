import multer from "multer";

const storage = multer.diskStorage({
  destination: "storage",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 } });
