import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//multer is used for upload images
import { ImageModel } from "../../database/allModels";
import { s3Upload } from "../../utils/s3";

const Router = express.Router();

//multer Configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Route   /:_id
 * Des     Get image details
 * Params  _id
 * Access  Public
 * Method  GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route   /
 * Des    Upload given image to s3 bucket and save file link to mongoDB
 * Params  none
 * Access  Public
 * Method  POST
 */
Router.post("/", upload.array("files", 5), async (req, res) => {
  try {
    const file = req.files;
    let uploadImage = [];
    for (let i = 0; i < file.length; i++) {
      const bucketOptions = {
        Bucket: "zomato-clone-project-fswd",
        Key: file[i].originalname,
        Body: file[i].buffer,
        ContentType: file[i].mimetype,
        ACL: "public-read", //access control list
      };
      uploadImage[i] = await s3Upload(bucketOptions);
    }
    const array = uploadImage.map((image) => {
      return { src: image.Location };
    });

    const dbUpload = await ImageModel.create({
      images: array,
    });

    return res.status(200).json({ dbUpload });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
