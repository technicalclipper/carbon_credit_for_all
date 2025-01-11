import React, { useState, useEffect } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import "../App.css";
import { predictSpecies } from "../hooks/hooks";
import { api1 } from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function TreeUploader() {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [species, setSpecies] = useState("");
    const [location, setLocation] = useState(null); // State for storing the location
    const [date, setDate] = useState(""); // State for storing selected date
    const [treeName, setTreeName] = useState(""); // State for storing tree name
    const [climate, setClimate] = useState(""); // State for storing climate type
    const [soilType, setSoilType] = useState(""); // State for storing soil type
    const [description, setDescription] = useState(""); // State for storing description

    const handleImageUpload = async () => {
        if (!image) {
            alert("Please select an image!");
            return;
        }

        try {
            // Compress the image
            const options = { maxSizeMB: 1, maxWidthOrHeight: 1024, useWebWorker: true };
            const compressedFile = await imageCompression(image, options);

            // Convert to Base64
            const reader = new FileReader();
            reader.onload = async () => {
                const base64 = reader.result.split(",")[1];
                try {
                    const response = await axios.post("http://localhost:8080/upload", {
                        file: base64,
                        fileName: compressedFile.name,
                    });
                    setImageUrl(response.data.url); // Set the uploaded image URL
                    alert("Image uploaded successfully!");
                } catch (error) {
                    console.error("Error uploading image:", error);
                    alert("Image upload failed!");
                }
            };
            reader.readAsDataURL(compressedFile);
        } catch (error) {
            console.error("Image compression failed:", error);
            alert("Failed to compress image!");
        }
    };

    // Predict species once the image URL is set
    useEffect(() => {
        if (imageUrl) {
            (async () => {
                try {
                    const prediction = await predictSpecies(imageUrl);
                    if (typeof prediction === "object" && prediction.species) {
                        setSpecies(prediction.species); // Extract species property
                    } else {
                        setSpecies(prediction); // Fallback if the response is a string
                    }

                    // Fetch current location after the species is predicted
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                const { latitude, longitude } = position.coords;
                                setLocation({ latitude, longitude });
                            },
                            (error) => {
                                console.error("Error getting location:", error);
                                alert("Failed to retrieve location.");
                            }
                        );
                    } else {
                        alert("Geolocation is not supported by this browser.");
                    }
                } catch (error) {
                    console.error("Error predicting species:", error);
                    alert("Failed to predict species!");
                }
            })();
        }
    }, [imageUrl]);

    // Handle axios request to send data
    const handleDataSubmit = async () => {
        const treeData = {
            species,
            location,
            date,
            treeName,
            climate,
            soilType,
            description,
            imageUrl
        };

        try {
            const response = await api1.post("/tree/uploadtree", treeData);
            alert("Data submitted successfully!");
            console.log("Server Response:", response.data);
            const{points}=response.data;
            const earnedpoints=points.earned;
            const co2=points.earned/100;
            toast.success(`Total Points Earned: ${earnedpoints}, Total CO2 Sequestrated: ${co2} kg`);
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Failed to submit data!");
        }
    };

    return (
        <div className="card">
            <h1 className="card-title">Upload the Initial Tree Sapling</h1>
            <div className="input-container">
                <label htmlFor="image-upload" className="upload-label">
                    Choose an Image
                </label>
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    className="file-input"
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                        setImageName(e.target.files[0]?.name || "");
                    }}
                />
                <button className="upload-button" onClick={handleImageUpload}>
                    Upload
                </button>
            </div>
            {imageName && <p className="image-name">Selected File: {imageName}</p>}
            {imageUrl && (
                <div className="image-preview">
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        className="uploaded-tree-image"
                    />
                </div>
            )}
            {species && <p className="species-result">Predicted Species: {species}</p>}
            {location && (
                <p className="location-result">
                    Current Location: Latitude {location.latitude}, Longitude {location.longitude}
                </p>
            )}

            {/* Inputs for additional information */}
            {location && species && (
                <div className="input-container" >
                    <div className="input-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="tree-name">Tree Name:</label>
                        <input
                            type="text"
                            id="tree-name"
                            value={treeName}
                            onChange={(e) => setTreeName(e.target.value)}
                            placeholder="Enter tree name"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="climate">Climate:</label>
                        <input
                            type="text"
                            id="climate"
                            value={climate}
                            onChange={(e) => setClimate(e.target.value)}
                            placeholder="Enter climate type"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="soil-type">Soil Type:</label>
                        <input
                            type="text"
                            id="soil-type"
                            value={soilType}
                            onChange={(e) => setSoilType(e.target.value)}
                            placeholder="Enter soil type"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter tree description"
                        />
                    </div>

                    <button className="submit-button" onClick={handleDataSubmit}>
                        Submit Data
                    </button>
                </div>

            )}
            <ToastContainer />
        </div>
    );
}
