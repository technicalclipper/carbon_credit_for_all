import supabase from "../model/userdb.js";
import { calculateCarbonSequestration } from "./sequestration.js";
import { updatepoints } from "./sequestration.js";
export const uploadtree = async (req, res) => {
    
    const { species, location, date, treeName, climate, soilType, description, imageUrl, co2Intake } = req.body;
    const userSno = req.user.sno; 
    
    try {
        
        if (!species || !location || !date || !treeName || !climate || !soilType || !description || !imageUrl) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const co2String = await calculateCarbonSequestration(species, "just planted", climate, soilType);
        console.log(co2String);
        const co2 = parseFloat(co2String);
        
        console.log(co2);
        console.log(typeof co2);
        const { data, error } = await supabase
            .from('tree')
            .insert([
                {
                    sno: userSno,
                    species,
                    treename: treeName,
                    date,
                    location: JSON.stringify(location), 
                    climate,
                    soiltype: soilType,
                    imageurl: imageUrl,
                    description,
                    co2_intake:co2,
                    
                },
            ]);
            const epoints=await updatepoints(co2,userSno);
            

        if (error) {
            console.error('Error inserting tree:', error);
            return res.status(500).json({ message: 'Error uploading tree data' });
        }

        return res.status(200).json({ message: 'Tree uploaded successfully', tree: data,points:epoints});
    } catch (error) {
        console.error('Error uploading tree:', error);
        return res.status(500).json({ message: 'Error uploading tree data' });
    }
};