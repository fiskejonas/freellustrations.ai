
function getCurrentEpochTimeMilliseconds(): number {
    return Date.now(); 
}

function convertEpochTimeMillisToDate(epochTime: number): Date {
    return new Date(epochTime); 
}