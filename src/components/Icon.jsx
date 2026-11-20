import {
  Store, LayoutDashboard, Table2, Bell, FileSpreadsheet, Users2, RefreshCw, Download, MapPin, Layers,
  ShieldCheck, Zap, BarChart3, Briefcase, Code2, ShoppingBag, Sparkles, Rocket, Lock, Globe, Clock, Mail,
  TrendingUp, Package, Repeat, FileText, Plug, Target, Heart, Users, Eye, KeyRound, Server, Workflow,
  Bot, BookOpen, LifeBuoy, MessageSquare, Building2, Boxes, Handshake, Lightbulb, Timer, Send, Pencil,
  Columns3, Gauge, Cable, Hammer, Search,
} from "lucide-react";

const ICONS = {
  Store, LayoutDashboard, Table2, Bell, FileSpreadsheet, Users2, RefreshCw, Download, MapPin, Layers,
  ShieldCheck, Zap, BarChart3, Briefcase, Code2, ShoppingBag, Sparkles, Rocket, Lock, Globe, Clock, Mail,
  TrendingUp, Package, Repeat, FileText, Plug, Target, Heart, Users, Eye, KeyRound, Server, Workflow,
  Bot, BookOpen, LifeBuoy, MessageSquare, Building2, Boxes, Handshake, Lightbulb, Timer, Send, Pencil,
  Columns3, Gauge, Cable, Hammer, Search,
};

/** Render a lucide icon by name — lets server components pass icons to client components as plain strings. */
export default function Icon({ name, ...props }) {
  const C = ICONS[name] || Sparkles;
  return <C {...props} />;
}
