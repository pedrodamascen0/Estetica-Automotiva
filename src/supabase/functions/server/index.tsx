import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

const BASE_PATH = "/make-server-1863c362";

// Helper for KV prefixes
const PREFIX = {
  CLIENT: "lava_jato:client:",
  VEHICLE: "lava_jato:vehicle:",
  SERVICE: "lava_jato:service:",
  EMPLOYEE: "lava_jato:employee:",
  APPOINTMENT: "lava_jato:appointment:"
};

// --- CLIENTS ---
app.get(`${BASE_PATH}/clients`, async (c) => {
  const clients = await kv.getByPrefix(PREFIX.CLIENT);
  return c.json(clients);
});

app.post(`${BASE_PATH}/clients`, async (c) => {
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const client = { ...body, id, createdAt: new Date().toISOString() };
  await kv.set(`${PREFIX.CLIENT}${id}`, client);
  return c.json(client);
});

// --- VEHICLES ---
app.get(`${BASE_PATH}/vehicles`, async (c) => {
  const vehicles = await kv.getByPrefix(PREFIX.VEHICLE);
  return c.json(vehicles);
});

app.post(`${BASE_PATH}/vehicles`, async (c) => {
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const vehicle = { ...body, id };
  await kv.set(`${PREFIX.VEHICLE}${id}`, vehicle);
  return c.json(vehicle);
});

// --- SERVICES ---
app.get(`${BASE_PATH}/services`, async (c) => {
  const services = await kv.getByPrefix(PREFIX.SERVICE);
  return c.json(services);
});

app.post(`${BASE_PATH}/services`, async (c) => {
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const service = { ...body, id };
  await kv.set(`${PREFIX.SERVICE}${id}`, service);
  return c.json(service);
});

// --- EMPLOYEES ---
app.get(`${BASE_PATH}/employees`, async (c) => {
  const employees = await kv.getByPrefix(PREFIX.EMPLOYEE);
  return c.json(employees);
});

app.post(`${BASE_PATH}/employees`, async (c) => {
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const employee = { ...body, id };
  await kv.set(`${PREFIX.EMPLOYEE}${id}`, employee);
  return c.json(employee);
});

// --- APPOINTMENTS ---
app.get(`${BASE_PATH}/appointments`, async (c) => {
  const appointments = await kv.getByPrefix(PREFIX.APPOINTMENT);
  return c.json(appointments);
});

app.post(`${BASE_PATH}/appointments`, async (c) => {
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const appointment = { 
    ...body, 
    id, 
    status: 'agendado', 
    createdAt: new Date().toISOString() 
  };
  await kv.set(`${PREFIX.APPOINTMENT}${id}`, appointment);
  return c.json(appointment);
});

app.patch(`${BASE_PATH}/appointments/:id`, async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const existing = await kv.get(`${PREFIX.APPOINTMENT}${id}`);
  if (!existing) return c.json({ error: "Not found" }, 404);
  
  const updated = { ...existing, ...body };
  await kv.set(`${PREFIX.APPOINTMENT}${id}`, updated);
  return c.json(updated);
});

app.delete(`${BASE_PATH}/appointments/:id`, async (c) => {
  const id = c.req.param('id');
  await kv.mdel([`${PREFIX.APPOINTMENT}${id}`]);
  return c.json({ success: true });
});

Deno.serve(app.fetch);
