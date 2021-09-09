import Annotation from './Annotation';
import LightningBolt from './LightningBolt';
import Globe from './Globe';
import Yen from './Yen';
import LockClosed from './LockClosed';
import Spinner from './Spinner';
import CircleCheck from './CircleCheck';
import CircleX from './CircleX';
const Icon = ({ name, className }) => {
    switch (name) {
        case 'annotation':
            return <Annotation className={className} />;
        case 'lightning-blot':
            return <LightningBolt className={className} />;
        case 'globe':
            return <Globe className={className} />;
        case 'yen':
            return <Yen className={className} />;
        case 'lock-closed':
            return <LockClosed className={className} />;
        case 'spinner':
            return <Spinner className={className} />;
        case 'circle-check':
            return <CircleCheck className={className} />;
        case 'circle-x':
            return <CircleX className={className} />;
        default:
            return null;
    }
};

export default Icon;
