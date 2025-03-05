import { DiJavascript } from 'react-icons/di';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center my-8 '>
            <h1 className="text-6xl sm:text-4xl font-bold" >Knowledge Cafe</h1>
            <img className='w-25 md:w-15' src={profile} alt="" />
        </div>
    );
};

export default Header;