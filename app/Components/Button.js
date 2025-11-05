'use client';

const Button = () => {
    return (
    <div className='mt-5'>
    <button
    className="bg-green-400 rounded-sm px-4 py-1" onClick={() => console.log('I have clicked here')}>
    Click here
     </button>
    </div>
    );
};

export default Button;