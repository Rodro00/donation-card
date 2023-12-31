const getStoredDonation = ()=>{
  const storedDonation = localStorage.getItem('donations')
  if(storedDonation){
    return JSON.parse(storedDonation)
  }
  return [];
}


const saveDonatin = id =>{
  const storedDonation = getStoredDonation();
  const exists = storedDonation.find(donationId=>donationId === id)
  if(!exists){
    storedDonation.push(id);
    localStorage.setItem('donations', JSON.stringify(storedDonation))
  }
}

export {getStoredDonation,saveDonatin}