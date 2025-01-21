import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
export const EndCard = () => {
    return (
        <footer className="bg-gray-300 text-center py-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Website developed by{' '}
            <a
              href="https://www.linkedin.com/in/gautham-radheepan-140b6119b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Gautham Radheepan
            </a>
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/gautham-radheepan-140b6119b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon1} alt="LinkedIn" className="w-6 h-6" />
            </a>
            
          </div>
        </footer>
      );
     
}

export default EndCard;