


import mongoose from "mongoose";

export type ScrapingIndexDocument = mongoose.Document & ScrapingIndexI

const scrapingIndexSchema = new mongoose.Schema({
    dateScraping: Date,
    urlIndex: Number,
    pageNewIndex: Number,
    pageIndexSection: Number,
    maxPages: Number,
    newspaper: String,
    reviewsSource: String,
    startingUrls: Array(String),
    scraperId: String,
    deviceId: String,
    id:Number

}, { timestamps: true });


export interface ScrapingIndexI {
    dateScraping: Date;
    urlIndex: number;
    pageNewIndex: number;
    pageIndexSection: number;
    maxPages: number;
    newspaper: string;
    reviewsSource: string;
    startingUrls: string[];
    scraperId: string;
    deviceId: string;
    id:number;
}

export const joiningStr = "====="

export const ScrapingIndex = mongoose.model<ScrapingIndexDocument>("ScrapingIndex", scrapingIndexSchema);