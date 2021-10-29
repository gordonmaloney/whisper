import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  file: { data: Buffer, contentType: String }
});

const Whisp = mongoose.model("Whisp", postSchema);

export default Whisp;
