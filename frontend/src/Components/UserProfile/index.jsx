
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { RiMastercardLine,RiVisaLine } from 'react-icons/ri';
const Wallet = ({wallet}) => {

    const generlStyle = "h-24 p-5 rounded-3xl shadow-list";

    return (
        <div className="w-full h-24 flex gap-5" >
            <div className={`${generlStyle} w-full flex items-center gap-36 px-10 tracking-widest`}>
                <p className="text-2xl font-semibold">{wallet.tag}</p>
                <p className="text-sm ">{wallet.address} </p>
                <p className="text-sm ">balance: <span className='font-semibold'>{wallet.balance}</span> </p>
                <p className="text-sm ">Add date: <span className='font-semibold'>{wallet.addDate}</span> </p>
            </div>
            <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${generlStyle} w-24 flex justify-center items-center cursor-pointer`}>
                <AiOutlineEdit className='text-2xl' />
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${generlStyle} w-24 flex justify-center items-center cursor-pointer`}>
                <AiOutlineDelete  className='text-2xl' />
            </motion.div>
        </div>
    )
}

const Card = ({card}) => {
    return(
        <div className='w-full flex gap-20'>
            <div className="w-96 h-48 shadow-card rounded-2xl relative">
                    <p className="absolute top-5 left-5 ">{card.cardType}</p>
                    {card.company === 'Visa' ? <RiVisaLine className='absolute bottom-5 right-5 text-6xl text-black' /> : <RiMastercardLine className='absolute bottom-5 right-5 text-6xl text-black' />}   
            </div>

            <div className="w-full h-24 flex flex-col gap-5" >
                <p className='text-xl font-semibold tracking-wide'>{card.name}</p>
                <p className="text-sm ">{card.cardType} ending in <span className='font-semibold'>{card.number}</span> </p>
                <p className="text-sm ">{card.expiryDate} </p>
                <div className='w-36 flex justify-between'>
                    <p className="text-sm tracking-wide underline decoration-1">edit</p>
                    <p className="text-sm tracking-wide underline decoration-1">delete</p>
                </div>
            </div>
        </div>
    )
}

const UserProfile = ({user}) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full min-h-96 p-10 border border-tertiary rounded-3xl flex flex-col gap-20">
            <div className="w-full min-h-96 flex flex-col gap-10 justify-around items-center">
                <p className="text-2xl font-semibold">Digital Wallet</p>
                {user.wallet.length > 0 ? 
                    user.wallet.map((wallet,index) =>(
                        <Wallet key={index} wallet={wallet} />
                    ))
                : (
                    <div className="flex flex-col justify-between items-center">
                        <p className='text-sm cursor-pointer underline decoration-1'>Add my wallet</p>
                    </div>
                )
                }
            </div>
            <hr />
            <div className="w-full min-h-96 flex flex-col gap-10 justify-around items-center">
                <p className="text-2xl font-semibold">Your card</p>
                {user.card.length > 0 ? 
                    user.card.map((card,index) =>(
                        <Card key={index} card={card} />
                    ))
                : (
                    <div className="flex flex-col justify-between items-center">
                        <p className='text-sm cursor-pointer underline decoration-1'>Add a payment method</p>
                    </div>
                )
                }
            </div>
        </motion.div>
    )
}


export default UserProfile;