import { GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const calculateCarbonSequestration = async (species, age, climate, soil) => {
    const prompt = `
    Given the following tree characteristics:
    Tree Species: ${species}
    Age: ${age} years
    Climate: ${climate}
    Soil Type: ${soil}
    
    Estimate the carbon sequestration in kilograms per year for this tree. 
    Consider the average carbon sequestration rates for trees of this species and provide the result as an integer or decimal in kilograms. 
    Return only the value in this format: { "co": <value> }
    `;

    const result = await model.generateContent(prompt);
    const resultText = result.response.text();

    // Remove any markdown formatting (like "```json")
    const cleanResultText = resultText.replace(/```json|\n|```/g, "").trim();

    return cleanResultText;
};



// ... rest of your code (server setup, etc.)


export const calculatePlantAge = (plantedDate, latestPostDate)=>{
    const startDate = new Date("2021-05-15");
    const endDate = new Date("2025-01-11");
    if (isNaN(startDate) || isNaN(endDate)) {
        throw new Error("Invalid date format. Please provide valid dates.");
    }
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += previousMonth.getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    const yearText = years === 1 ? "year" : "years";
    const monthText = months === 1 ? "month" : "months";
    const dayText = days === 1 ? "day" : "days";
    return `${years} ${yearText}, ${months} ${monthText}, and ${days} ${dayText}`;
}