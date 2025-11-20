// src/pages/CustomizedTryOn.jsx

import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import PrimaryButton from '../components/PrimaryButton';

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 
// Accent: Muted Gold/Bronze
const COLOR_ACCENT = '#CD7F32';
// Dark Text
const COLOR_TEXT = '#1F2937';

const CustomizedContent = () => {
    const [image, setImage] = useState(null);
    const [clothColor, setClothColor] = useState(COLOR_PRIMARY);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const colors = [
        { name: 'Bottle Green', hex: COLOR_PRIMARY },
        { name: 'Muted Gold', hex: COLOR_ACCENT },
        { name: 'Navy Blue', hex: '#000080' },
        { name: 'Charcoal Grey', hex: '#36454F' },
    ];

    return (
        <div className="max-w-5xl mx-auto p-8 lg:p-12 space-y-8" style={{ color: COLOR_TEXT }}>
            <h2 className="text-4xl font-bold text-center" style={{ color: COLOR_PRIMARY }}>
                Customized Visual Try-On
            </h2>
            <p className="text-center text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
                Upload a picture of your face/upper body to see how different colors and styles interact with your natural features and skin tone.
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* 1. Control Panel */}
                <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-lg space-y-6 border border-gray-100">
                    <h3 className="text-xl font-semibold border-b pb-3" style={{ color: COLOR_PRIMARY }}>
                        Step 1: Upload Your Image
                    </h3>
                    
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="w-full text-sm file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm file:font-semibold"
                        style={{
                            '--file-bg': COLOR_PRIMARY,
                            '--file-text': 'white',
                            '--file-hover': '#008060'
                        }}
                    />

                    <h3 className="text-xl font-semibold border-b pb-3 pt-4" style={{ color: COLOR_PRIMARY }}>
                        Step 2: Choose Garment Color
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {colors.map(color => (
                            <div 
                                key={color.name}
                                onClick={() => setClothColor(color.hex)}
                                title={color.name}
                                className={`w-10 h-10 rounded-full cursor-pointer transition transform hover:scale-110 shadow-md border-2`}
                                style={{ 
                                    backgroundColor: color.hex,
                                    borderColor: clothColor === color.hex ? COLOR_ACCENT : 'transparent',
                                    borderWidth: clothColor === color.hex ? '3px' : '2px'
                                }}
                            ></div>
                        ))}
                    </div>
                    <p className="text-sm pt-2">Current Color: <span style={{ color: clothColor }}>{colors.find(c => c.hex === clothColor)?.name || 'Custom'}</span></p>

                    <PrimaryButton disabled={!image} onClick={() => alert('Analyzing fit for selected color...')}>
                        Analyze Fit
                    </PrimaryButton>
                </div>

                {/* 2. Visualizer */}
                <div className="lg:w-2/3 bg-white p-6 rounded-xl shadow-lg border-4 border-dashed flex flex-col items-center justify-center relative"
                    style={{ 
                        borderColor: COLOR_ACCENT, 
                        minHeight: '500px'
                    }}>
                    
                    {image ? (
                        <>
                            <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm" style={{ backgroundImage: `url(${image})` }}></div>
                            <div className="relative z-10 p-4 border-4 rounded-xl" style={{ borderColor: clothColor }}>
                                <img src={image} alt="User Face" className="max-h-80 w-auto rounded-lg shadow-2xl" />
                                <div 
                                    className="w-full h-12 mt-4 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                                    style={{ backgroundColor: clothColor }}
                                >
                                    Virtual Garment ({clothColor})
                                </div>
                            </div>
                            <p className="mt-4 text-center text-sm italic">
                                *In a full application, the garment would be digitally layered over the image here.*
                            </p>
                        </>
                    ) : (
                        <div className="text-center space-y-4">
                            <Zap size={64} className="mx-auto" style={{ color: COLOR_ACCENT }} />
                            <p className="text-xl font-medium" style={{ color: COLOR_PRIMARY }}>
                                Upload your image to begin the Visual Try-On experience.
                            </p>
                            <p className="text-sm text-gray-500">
                                This feature helps you judge how colors and tones complement your complexion.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomizedContent;