import { motion } from 'framer-motion';
import { useNavigation } from '../../NavigationContext';

const transition = (OgComponent) => {
    return () => {
        const { direction } = useNavigation();
        console.log('Current direction:', direction);
        let inType, outType;
        if (direction === 'left') {
            inType = "slide-in-back";
            outType = "slide-out-back";
        } else {
            inType = "slide-in";
            outType = "slide-out";
        }

        return (
            <>
                <OgComponent />
                <motion.div 
                    className={inType}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0 }}
                    exit={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />

                <motion.div 
                    className={outType}
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </>
        );
    };
};

export default transition;