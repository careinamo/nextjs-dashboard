import mongoose from "mongoose";

const connectDB = async (): Promise<boolean | void> => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("MONGODB Already Connected");
            return true;
        }
        await mongoose.connect(process.env.MONGODB_URI as string); // Asegurándonos de que MONGODB_URI sea reconocido como string.
        console.log("MONGODB Connected");
        return true;
    } catch (error) {
        // Asumiendo que el error es de tipo any, dado que no tenemos un tipo específico para el error aquí.
        console.log("MONGODB ERROR", error);
    }
};

export default connectDB;
