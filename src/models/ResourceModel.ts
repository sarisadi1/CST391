import pool from '../config/db';

const ResourceModel = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM Resources');
    return rows as any[]; // Explicitly type rows as an array
  },
  async getById(id: number) {
    const [rows] = await pool.query('SELECT * FROM Resources WHERE ResourceID = ?', [id]);
    return (rows as any[])[0]; // Explicitly type rows as an array
  },
  async create(title: string, type: string, content: string, userId: number) {
    const [result] = await pool.query(
      'INSERT INTO Resources (Title, Type, Content, UserID) VALUES (?, ?, ?, ?)',
      [title, type, content, userId]
    );
    return result;
  },
  async update(id: number, title: string, type: string, content: string) {
    const [result] = await pool.query(
      'UPDATE Resources SET Title = ?, Type = ?, Content = ? WHERE ResourceID = ?',
      [title, type, content, id]
    );
    return result;
  },
  async delete(id: number) {
    const [result] = await pool.query('DELETE FROM Resources WHERE ResourceID = ?', [id]);
    return result;
  }
};

export default ResourceModel;