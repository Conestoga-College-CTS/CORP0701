import express, { Request, Response } from 'express';
import knex, { Knex } from 'knex';
import knexConfig from './knexfile';

// Initialize Knex with the development configuration
const db: Knex = knex(knexConfig);

const app: express.Application = express();
const port: number = 9000;

app.use(express.json());

app.get('/telemetry', async (req: Request, res: Response) => {
    console.log(req.query);
    const { tag, startTimestamp, endTimestamp } = req.query;
    
    if (typeof tag === 'string' && typeof startTimestamp === 'string' && typeof endTimestamp === 'string') {
        try {
            const data = await db('telemetry')
                .select('*')
                .where('tag', '=', tag)
                .andWhere('timestamp', '>=', startTimestamp)
                .andWhere('timestamp', '<=', endTimestamp)
                .orderBy('timestamp', 'asc');
                console.log(data);
            res.json(data);
            
        } catch (error) {
            console.error('Error fetching telemetry data:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(400).json({ error: 'Invalid query parameters' });
    }
});

app.listen(port, () => {
    console.log(`Telemetry service listening at http://localhost:${port}`);
});
