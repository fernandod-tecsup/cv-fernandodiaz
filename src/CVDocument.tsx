import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import foto from './img/fotoCV2.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#1a1d21',
    color: '#f8fafc',
    fontFamily: 'Helvetica',
    fontSize: 10,
    height: '100%',
  },
  sidebar: {
    width: 190,
    backgroundColor: '#14171a',
    padding: '24 18',
    borderRightColor: '#2d3339',
    borderRightWidth: 1,
    height: '100%',
  },
  foto: {
    width: 110,
    marginBottom: 16,
    borderRadius: 18,
    alignSelf: 'center',
  },
  sectionTitle: {
    color: '#deff9a',
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 7,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contactText: {
    color: '#94a3b8',
    fontSize: 8,
    marginBottom: 4,
  },
  tag: {
    borderWidth: 0.6,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 3,
    marginBottom: 3,
    fontSize: 7,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  main: {
    flex: 1,
    padding: '28 24',
    height: '100%',
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
    color: '#f8fafc',
  },
  role: {
    color: '#deff9a',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
    opacity: 0.9,
  },
  summary: {
    color: '#94a3b8',
    fontSize: 9,
    lineHeight: 1.6,
    marginBottom: 16,
    maxWidth: 340,
  },
  divider: {
    borderBottomColor: '#2d3339',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  tabTitle: {
    color: '#deff9a',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingBottom: 6,
    marginBottom: 12,
    borderBottomColor: '#deff9a',
    borderBottomWidth: 1.5,
    alignSelf: 'flex-start',
  },
  expItem: {
    paddingLeft: 12,
    borderLeftColor: '#2d3339',
    borderLeftWidth: 2,
    marginBottom: 16,
  },
  expDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a1d21',
    borderColor: '#2d3339',
    borderWidth: 2,
    position: 'absolute',
    left: -5,
    top: 2,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  expTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#f8fafc',
    marginBottom: 2,
  },
  expCompany: {
    color: '#deff9a',
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },
  expPeriod: {
    fontSize: 8,
    color: '#94a3b8',
    backgroundColor: '#2d3339',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 99,
  },
  point: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 3,
  },
  pointArrow: {
    color: '#deff9a',
    fontSize: 10,
    lineHeight: 1.4,
  },
  pointText: {
    color: '#94a3b8',
    fontSize: 9,
    flex: 1,
    lineHeight: 1.5,
  },
  eduBox: {
    backgroundColor: '#14171a',
    padding: '14 16',
    borderRadius: 10,
    borderColor: '#2d3339',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  eduTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#f8fafc',
    marginBottom: 3,
  },
  eduSchool: {
    color: '#94a3b8',
    fontSize: 10,
  },
  eduPeriod: {
    color: '#deff9a',
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    textAlign: 'right',
    marginBottom: 2,
  },
  eduStatus: {
    color: '#94a3b8',
    fontSize: 9,
    textAlign: 'right',
  },
  competenciasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  compCard: {
    width: '47%',
    backgroundColor: '#14171a',
    borderColor: '#2d3339',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  compEmoji: {
    fontSize: 18,
    marginBottom: 5,
  },
  compTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#f8fafc',
    marginBottom: 3,
  },
  compDesc: {
    fontSize: 8,
    color: '#94a3b8',
    lineHeight: 1.5,
  },
});

const experience = [
  {
    title: "Analista Senior Java Backend",
    company: "COMSATEL",
    period: "2024 — 2025",
    points: [
      "Mantenimiento y evolución de sistemas Backend utilizando Java Spring Boot.",
      "Implementación de patrones de diseño bajo Arquitectura Hexagonal.",
      "Desarrollo de nuevos endpoints y microservicios para la mejora operativa.",
    ],
  },
  {
    title: "Analista Desarrollador Móvil Android",
    company: "UNIVERSIDAD DE LIMA",
    period: "2022 — 2023",
    points: [
      "Optimización del aplicativo móvil mediante integraciones API REST y SOAP.",
      "Liderazgo en el desarrollo de interfaces con Jetpack Compose y Material Design 3.",
      "Gestión completa del ciclo de vida en Play Store y Firebase.",
    ],
  },
  {
    title: "Desarrollador de Aplicaciones",
    company: "BALKANED",
    period: "2021 — 2022",
    points: [
      "Desarrollo de Backend en PHP Nativo para sistemas de administración web.",
      "Sistematización de procesos portuarios con firma digital y generación de PDFs en kotlin.",
      "Optimización del aplicativo móvil Oceano Seafood mediante integraciones API REST en JAVA y Kotlin.",
      "Manejo de flujos de datos en tiempo real mediante Firebase.",
    ],
  },
];

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* SIDEBAR */}
      <View style={styles.sidebar}>
        <Image style={styles.foto} src={foto} />

        <Text style={styles.sectionTitle}>Contacto</Text>
        <Text style={styles.contactText}>luis.diaz.tr@tecsup.edu.pe</Text>
        <Text style={styles.contactText}>981549279</Text>
        <Text style={styles.contactText}>Lima, Perú</Text>

        <Text style={styles.sectionTitle}>Backend</Text>
        <View style={styles.tagsRow}>
          {["Java Spring Boot","Microservicios","Arquitectura Hexagonal","PHP Nativo","API REST / SOAP","SOLID Principles"].map(t => (
            <View key={t} style={[styles.tag, { borderColor: '#d9ff8d', backgroundColor: '#deff9a08' }]}>
              <Text style={{ color: '#deff9a' }}>{t}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Data & Cloud</Text>
        <View style={styles.tagsRow}>
          {["SQL", "MySQL", "MongoDB", "Firebase Firestore", "Realtime Database", "Git / GitLab / GitHub","Postman"].map(t => (
            <View key={t} style={[styles.tag, { borderColor: '#8596ac', backgroundColor: '#94a3b808' }]}>
              <Text style={{ color: '#94a3b8' }}>{t}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Mobile</Text>
        <View style={styles.tagsRow}>
          {["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM" , "Java", "Firebase","Android Studio","Material Design 3"].map(t => (
            <View key={t} style={[styles.tag, { borderColor: '#0d4589', backgroundColor: '#60a5fa08' }]}>
              <Text style={{ color: '#60a5fa' }}>{t}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Idiomas</Text>
        <View style={styles.langRow}>
          <Text style={{ color: '#94a3b8', fontSize: 9 }}>Español</Text>
          <Text style={{ color: '#deff9a', fontSize: 9 }}>Nativo</Text>
        </View>
        <View style={styles.langRow}>
          <Text style={{ color: '#94a3b8', fontSize: 9 }}>Inglés</Text>
          <Text style={{ color: '#deff9a', fontSize: 9, opacity: 0.6 }}>Básico</Text>
        </View>
      </View>

      {/* MAIN */}
      <View style={styles.main}>
        <Text style={styles.name}>Fernando Diaz Trinidad</Text>
        <Text style={styles.role}>Analista Programador Backend</Text>
        <Text style={styles.summary}>
          Profesional egresado de TECSUP con sólida trayectoria en el diseño e implementación de arquitecturas escalables. Experto en optimización de lógica de servidor y microservicios robustos, con un enfoque analítico para la resolución de problemas complejos.
        </Text>

        {/* Experiencia */}
        <Text style={styles.tabTitle}>Experiencia</Text>
        <View style={{ marginTop: 8 }}>
          {experience.map((exp, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.expDot} />
              <View style={styles.expHeader}>
                <View>
                  <Text style={styles.expTitle}>{exp.title}</Text>
                  <Text style={styles.expCompany}>{exp.company}</Text>
                </View>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              {exp.points.map((p, j) => (
                <View key={j} style={styles.point}>
                  <Text style={styles.pointArrow}>›</Text>
                  <Text style={styles.pointText}>{p}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Educación */}
        <Text style={[styles.tabTitle, { marginTop: 14 }]}>Educación</Text>
        <View style={styles.eduBox}>
          <View>
            <Text style={styles.eduTitle}>Diseño y Desarrollo de Software</Text>
            <Text style={styles.eduSchool}>TECSUP</Text>
          </View>
          <View>
            <Text style={styles.eduPeriod}>2017 — 2021</Text>
            <Text style={styles.eduStatus}>Egresado</Text>
          </View>
        </View>

        {/* Competencias */}
        <Text style={[styles.tabTitle, { marginTop: 14 }]}>Competencias</Text>
        <View style={styles.competenciasGrid}>
          {[
            { title: "Liderazgo Técnico", desc: "Guía decisiones de arquitectura y mejores prácticas.", emoji: "⚡" },
            { title: "Adaptabilidad", desc: "Rápida curva de aprendizaje ante nuevos stacks.", emoji: "🎯" },
            { title: "Calidad de Código", desc: "Enfoque estricto en principios SOLID y Clean Code.", emoji: "💎" },
            { title: "Trabajo en Equipo", desc: "Experiencia en metodologías ágiles.", emoji: "🤝" },
          ].map((c, i) => (
            <View key={i} style={styles.compCard}>
              <Text style={styles.compEmoji}>{c.emoji}</Text>
              <Text style={styles.compTitle}>{c.title}</Text>
              <Text style={styles.compDesc}>{c.desc}</Text>
            </View>
          ))}
        </View>
      </View>

    </Page>
  </Document>
);

export default CVDocument;