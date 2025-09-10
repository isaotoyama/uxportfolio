// Simple authentication for admin access
import bcrypt from 'bcryptjs';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD_HASH = '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password

export async function verifyAdmin(username: string, password: string): Promise<boolean> {
  if (username !== ADMIN_USERNAME) {
    return false;
  }
  
  return await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

export function createSession() {
  return {
    isAdmin: true,
    timestamp: Date.now()
  };
}

export function verifySession(session: any): boolean {
  if (!session || !session.isAdmin) {
    return false;
  }
  
  // Session expires after 24 hours
  const twentyFourHours = 24 * 60 * 60 * 1000;
  return (Date.now() - session.timestamp) < twentyFourHours;
}