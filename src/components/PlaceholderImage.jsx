import { motion } from 'framer-motion'

const PlaceholderImage = ({ 
  width = 400, 
  height = 300, 
  text = 'Image', 
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center ${className}`}
      style={{ width, height }}
      {...props}
    >
      <div className="text-center">
        <div className="text-4xl mb-2 opacity-50">🖼️</div>
        <div className="text-sm text-gray-400">{text}</div>
      </div>
    </motion.div>
  )
}

export default PlaceholderImage
