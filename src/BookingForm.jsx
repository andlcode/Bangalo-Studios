import React, { useMemo, useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import { ptBR } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";


const Card = styled.form`
  width: 100%;
  max-width: 1200px; 

  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
padding: clamp(32px, 6vw, 64px); 
`;

const H1 = styled.h1`
  margin: 0 0 6px;
  font: 900 var(--fs-1)/1.2 ui-sans-serif, system-ui, -apple-system, "Segoe UI";
  color: #0f1a4a;
`;

const Lead = styled.p`
  margin: 0 0 22px;
  color: var(--muted);
  font-size: var(--fs-2);
  margin-bottom: 34px;
`;

/* ====== Grid ====== */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: 920px) { grid-template-columns: 1fr 1fr; }
`;

const Field = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--ink);
  margin-top: 32px;
`;




const Input = styled.input`
  width: 100%;
  height: 52px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--field);
  color: var(--ink);
  padding: 0 16px;
  outline: none;
  transition: border-color .18s, box-shadow .18s, background .18s;
 margin-bottom: 4px;;
  &:focus {
    border-color: var(--primary);
    background: #fff;
    box-shadow: 0 0 0 6px var(--primary-10);
  }
  &::placeholder { color: #93a0b2; }

  ${p => p.$invalid && css`
    border-color: var(--danger);
    background: #fff5f5;
    box-shadow: 0 0 0 6px rgba(220,38,38,.12);
  `}
`;


const DateFieldWrap = styled.div`
  position: relative;
  display: grid;
`;

const DateInput = styled(Input)`
  padding-right: 46px; 
`;


const DatePickerTheme = createGlobalStyle`
  .react-datepicker {
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    color: var(--ink);
    overflow: hidden;
  }
  .react-datepicker__triangle { 
    color: var(--card);
    fill: var(--card);
    filter: drop-shadow(0 2px 3px rgba(2,6,23,.08));
  }
  .react-datepicker__header {
    background: #fff;
    border-bottom: 1px solid var(--line);
    padding-top: 10px;
  }
  .react-datepicker__current-month { font-weight: 900; color: var(--ink); }
  .react-datepicker__day-names { margin-top: 6px; }
  .react-datepicker__day-name {
    color: var(--muted);
    font-weight: 700;
    width: 2.2rem; line-height: 2.2rem;
  }
  .react-datepicker__month { padding: 8px 10px 12px; }
  .react-datepicker__day {
    border-radius: 10px;
    width: 2.2rem; line-height: 2.2rem; margin: .15rem; color: var(--ink);
  }
  .react-datepicker__day:hover { background: var(--field); border: 1px solid var(--primary); }
  .react-datepicker__day--today { box-shadow: inset 0 0 0 2px var(--primary); font-weight: 800; }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background: var(--primary); color: #fff !important; border: 1px solid var(--primary);
    box-shadow: 0 10px 22px var(--primary-20);
  }
  .react-datepicker__day--outside-month { color: #9aa6b2; }
  .react-datepicker__day--disabled { color: var(--muted); opacity: .45; pointer-events: none; }
  .react-datepicker__navigation-icon::before { border-color: var(--ink); top: 8px; }
  .react-datepicker__navigation:hover .react-datepicker__navigation-icon::before { border-color: var(--primary); }
  .react-datepicker-popper[data-placement^="bottom"] { margin-top: 8px; }
`;


const CustomDateInput = React.forwardRef(
  ({ value, onClick, placeholder, $invalid }, ref) => (
    <div style={{ position: "relative" }}>
      <DateInput
        onClick={onClick}
        value={value || ""}
        placeholder={placeholder || "dd/mm/aaaa"}
        ref={ref}
        readOnly
        $invalid={$invalid}
        aria-describedby="hint-data"
      />
      <span
        style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          display: "flex"
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--primary)">
          <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 7H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9ZM8 6V5a1 1 0 1 0-2 0v1H5v2h14V6h-1V5a1 1 0 1 0-2 0v1H8Z" />
        </svg>
      </span>
    </div>
  )
);

const Help = styled.span`
  font-size: var(--fs-3);
    margin: 0;                
  line-height: 1.2;
  color: ${p => p.error ? "var(--danger)" : "var(--muted)"};
`;

const SlotsCol = styled.div`
  display: grid;
  gap: 10px;
`;

const Chips = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 560px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  @media (min-width: 980px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`;

const Chip = styled.button`
  height: 42px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--ink);
  padding: 0 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform .1s, box-shadow .18s, background .18s, color .18s, border-color .18s;

  &:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(2,6,23,.06); }

  ${p => p.$selected && css`
    background: var(--primary);
    border-color: var(--primary);
    color: #fff;
    box-shadow: 0 10px 22px var(--primary-20);
  `}
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 26px;
`;

const Submit = styled.button`
  height: 54px;
  padding: 0 22px;
  border: none;
  border-radius: 16px;
   background: linear-gradient(135deg, var(--primary), #4f46e5); 
  color: #fff;
  font-weight: 900; 
  font-size: 1rem;
  letter-spacing: .3px;
  box-shadow: 0 18px 36px var(--primary-20);
  cursor: pointer;
  transition: filter .2s, transform .1s, box-shadow .2s;

 &:hover { filter: brightness(1.2); transform: translateY(-2px) scale(1.02); }
  &:disabled { opacity: .6; cursor: not-allowed; box-shadow: none; transform: none; }
`;

const Note = styled.span`
  color: var(--muted);
  font-size: var(--fs-3);
`;

/* ====== Helpers ====== */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const onlyDigits = (s) => s.replace(/\D/g, "");
const nomeOk = (v) => v.trim().split(/\s+/).length >= 2 && v.trim().length >= 5;

function gerarSlots(minHour = 9, maxHour = 20) {
  const arr = [];
  for (let h = minHour; h <= maxHour; h++) arr.push(`${String(h).padStart(2, "0")}:00`);
  return arr;
}

// ISO helpers
function isValidISODate(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() + 1 === m && dt.getDate() === d;
}
function isTodayISO(iso) {
  if (!isValidISODate(iso)) return false;
  const [y, m, d] = iso.split("-").map(Number);
  const now = new Date();
  return now.getFullYear() === y && now.getMonth() + 1 === m && now.getDate() === d;
}
function toDateAtLocal(isoDate, timeStr) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const [hh, mm] = timeStr.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}

export default function BookingForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", data: "", slots: [] });
  const [t, setT] = useState({});
  const [sending] = useState(false);

  const allSlots = useMemo(() => gerarSlots(9, 20), []);

  const visible = useMemo(() => {
    if (!form.data) return [];
    if (!isValidISODate(form.data)) return [];
    if (!isTodayISO(form.data)) return allSlots;

    const nowPlus5 = new Date(Date.now() + 5 * 60 * 1000);
    return allSlots.filter((s) => toDateAtLocal(form.data, s) > nowPlus5);
  }, [form.data, allSlots]);
  const errs = {
    nome: !form.nome ? "Informe seu nome completo." : (!nomeOk(form.nome) ? "Digite nome e sobrenome." : ""),
    email: !form.email ? "Informe seu e-mail." : (!emailRegex.test(form.email) ? "E-mail inválido." : ""),
    telefone: !form.telefone ? "Informe seu celular." : (onlyDigits(form.telefone).length < 10 ? "Celular inválido (use DDD)." : ""),
    data: !form.data ? "Selecione a data." : (!isValidISODate(form.data) ? "Data inválida." : ""),
    slots: !form.data ? "" : (form.slots.length === 0 ? "Selecione pelo menos um horário." : ""),
  };
  const valid = !errs.nome && !errs.email && !errs.telefone && !errs.data && !errs.slots;

  const setVal = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const blur = (e) => setT((x) => ({ ...x, [e.target.name]: true }));

  const maskPhone = (v) => {
    const d = onlyDigits(v).slice(0, 11);
    if (d.length <= 10)
      return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) => [a && `(${a}`, a && ") ", b, c && `-${c}`].filter(Boolean).join(""));
    return d.replace(/(\d{0,2})(\d{0,5})(\d{0,4}).*/, (_, a, b, c) => [a && `(${a}`, a && ") ", b, c && `-${c}`].filter(Boolean).join(""));
  };

  const toggleSlot = (s) => {
    if (!form.data) return;
    setForm((f) => {
      const next = f.slots.includes(s) ? f.slots.filter((x) => x !== s) : [...f.slots, s];
      return { ...f, slots: next.sort() };
    });
  }
const submit = (e) => {
  e.preventDefault();
  setT({ nome: true, email: true, telefone: true, data: true, slots: true });
  if (!valid) return;

  let dateBR = form.data;
  if (/^\d{4}-\d{2}-\d{2}$/.test(form.data)) {
    const [y, m, d] = form.data.split("-");
    dateBR = `${d}/${m}/${y}`;
  }

  const horarios = form.slots.length ? form.slots.join(", ") : "a combinar";

  const msg = `
Olá, eu sou ${form.nome}! Gostaria de agendar com você.
Segue meus dados:

📱 Celular: ${form.telefone}
📧 E-mail: ${form.email}
📅 Data: ${dateBR}
⏰ Horários: ${horarios}
  `.trim();


  const WHATS_NUMBER = "5521970187698"; 
  const phone = WHATS_NUMBER.replace(/\D/g, "");
  const encoded = encodeURIComponent(msg);

  const links = [
    `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`, 
    `https://wa.me/${phone}?text=${encoded}`,                      
    `whatsapp://send?phone=${phone}&text=${encoded}`,            
  ];

  const win = window.open(links[0], "_blank");
  if (!win) {
    window.location.href = links[0];
  }
};


  return (
    <Card onSubmit={submit} noValidate>
      <DatePickerTheme />

      <H1>Faça seu agendamento</H1>
      <Lead>Preencha seus dados e selecione a data e horários desejados.</Lead>

      <Field>
        <Label htmlFor="nome">Nome completo</Label>
        <Input
          id="nome"
          name="nome"
          placeholder="Ex.: Maria Silva"
          value={form.nome}
          onChange={setVal}
          onBlur={blur}
          $invalid={t.nome && !!errs.nome}
          autoComplete="name"
          required
        />
        {t.nome && <Help error={!!errs.nome}>{errs.nome || " "}</Help>}
      </Field>

      <Grid>
        <Field>
          <Label htmlFor="telefone">Celular</Label>
          <Input
            id="telefone"
            name="telefone"
            inputMode="tel"
            placeholder="(11) 9 9999-9999"
            value={form.telefone}
            onChange={(e) => setForm((f) => ({ ...f, telefone: maskPhone(e.target.value) }))}
            onBlur={blur}
            $invalid={t.telefone && !!errs.telefone}
            autoComplete="tel"
            required
          />
          {t.telefone && <Help error={!!errs.telefone}>{errs.telefone || " "}</Help>}
          <Help>Inclua o DDD. Ex.: (21) 9 8888-7777</Help>
        </Field>

        <Field>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="voce@email.com"
            value={form.email}
            onChange={setVal}
            onBlur={blur}
            $invalid={t.email && !!errs.email}
            autoComplete="email"
            required
          />
          {t.email && <Help error={!!errs.email}>{errs.email || " "}</Help>}
        </Field>
      </Grid>

      <Grid>
        <Field>
          <Label htmlFor="data">Data</Label>

          <DateFieldWrap>
            <DatePicker
              selected={form.data ? new Date(form.data) : null}
              onChange={(date) => {
                if (!date) {
                  setForm(f => ({ ...f, data: "", slots: [] }));
                  return;
                }
                // ISO local yyyy-mm-dd
                const iso = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                  .toISOString()
                  .slice(0, 10);

                const base = gerarSlots(9, 20);
                const nextVisible = isTodayISO(iso)
                  ? base.filter(s => toDateAtLocal(iso, s) > new Date(Date.now() + 5 * 60 * 1000))
                  : base;

                setForm(f => ({ ...f, data: iso, slots: f.slots.filter(s => nextVisible.includes(s)) }));
              }}
              onBlur={() => setT(x => ({ ...x, data: true }))}
              locale={ptBR}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="dd/mm/aaaa"
              isClearable
              customInput={<CustomDateInput $invalid={t.data && !!errs.data} />}
            />
          </DateFieldWrap>

          <Help id="hint-data" error={!!errs.data}>
            {t.data ? (errs.data || " ") : " "}
          </Help>
        </Field>

        <SlotsCol>
          <Label>Horários {form.data ? "" : "(selecione a data primeiro)"}</Label>

          {form.data ? (
            !isValidISODate(form.data) ? (
              <Help error>Selecione uma data válida para ver os horários.</Help>
            ) : (
              <>
                {visible.length ? (
                  <Chips>
                    {visible.map((s) => (
                      <Chip
                        key={s}
                        type="button"
                        onClick={() => toggleSlot(s)}
                        $selected={form.slots.includes(s)}
                        aria-pressed={form.slots.includes(s)}
                      >
                        {s}
                      </Chip>
                    ))}
                  </Chips>
                ) : (
                  <Help>Nenhum horário disponível para esta data.</Help>
                )}
                {t.slots && <Help error={!!errs.slots}>{errs.slots || " "}</Help>}
              </>
            )
          ) : (
            <Help>Escolha a data para ver os horários.</Help>
          )}
        </SlotsCol>
      </Grid>

      <Actions>
        <Submit type="submit" disabled={sending || !valid}>
          {sending ? "Enviando..." : "Enviar pedido"}
        </Submit>
        <Note>Aguardamos você!</Note>
      </Actions>
    </Card>
  );
}
