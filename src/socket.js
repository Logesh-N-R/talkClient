import { io } from 'socket.io-client';
import ENV from "./data/env"

export const socket = io('https://talky-a43x.onrender.com:4000');
