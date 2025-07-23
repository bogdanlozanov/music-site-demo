'use client';

const BuyButton = () => {
  const handleClick = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Failed to create session');
    }
  };

  return (
    <button onClick={handleClick}>
      Buy Electric Guitar – $499
    </button>
  );
}

export default BuyButton