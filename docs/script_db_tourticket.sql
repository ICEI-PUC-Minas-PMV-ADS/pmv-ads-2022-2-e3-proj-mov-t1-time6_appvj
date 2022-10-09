USE [master]
GO

/****** Object:  Database [tour_ticket]    Script Date: 09/10/2022 19:15:45 ******/
DROP DATABASE [tour_ticket]
GO

/****** Object:  Database [tour_ticket]    Script Date: 09/10/2022 19:15:45 ******/
CREATE DATABASE [tour_ticket]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'tour_ticket', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\tour_ticket.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'tour_ticket_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\tour_ticket_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [tour_ticket].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [tour_ticket] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [tour_ticket] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [tour_ticket] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [tour_ticket] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [tour_ticket] SET ARITHABORT OFF 
GO

ALTER DATABASE [tour_ticket] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [tour_ticket] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [tour_ticket] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [tour_ticket] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [tour_ticket] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [tour_ticket] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [tour_ticket] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [tour_ticket] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [tour_ticket] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [tour_ticket] SET  DISABLE_BROKER 
GO

ALTER DATABASE [tour_ticket] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [tour_ticket] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [tour_ticket] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [tour_ticket] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [tour_ticket] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [tour_ticket] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [tour_ticket] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [tour_ticket] SET RECOVERY FULL 
GO

ALTER DATABASE [tour_ticket] SET  MULTI_USER 
GO

ALTER DATABASE [tour_ticket] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [tour_ticket] SET DB_CHAINING OFF 
GO

ALTER DATABASE [tour_ticket] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [tour_ticket] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [tour_ticket] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [tour_ticket] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [tour_ticket] SET QUERY_STORE = OFF
GO

ALTER DATABASE [tour_ticket] SET  READ_WRITE 
GO

USE [tour_ticket]
GO
/****** Object:  Table [dbo].[anuncio]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[anuncio](
	[id_anuncio] [int] NOT NULL,
	[id_conta_usuario] [int] NOT NULL,
	[titulo_anuncio] [varchar](80) NOT NULL,
	[descricao_anuncio] [varchar](max) NOT NULL,
	[data_cadastro] [datetime] NOT NULL,
	[data_inicio_anuncio] [datetime] NOT NULL,
	[data_fim_anuncio] [datetime] NOT NULL,
	[valor_pacote] [money] NOT NULL,
	[quantidade] [numeric](3, 0) NOT NULL,
	[id_transporte] [int] NOT NULL,
 CONSTRAINT [PK_anuncio] PRIMARY KEY CLUSTERED 
(
	[id_anuncio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[conta_usuario]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[conta_usuario](
	[id_conta_usuario] [int] NOT NULL,
	[cnpj_cpf] [varchar](14) NOT NULL,
	[nome] [varchar](70) NOT NULL,
	[nome_usuario] [varchar](20) NOT NULL,
	[data_nascimento] [date] NOT NULL,
	[email] [varchar](155) NOT NULL,
	[telefone] [varchar](11) NOT NULL,
	[celular] [varchar](11) NOT NULL,
 CONSTRAINT [PK_conta_usuario] PRIMARY KEY CLUSTERED 
(
	[id_conta_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[imagem_anuncio]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[imagem_anuncio](
	[id_imagem] [int] NOT NULL,
	[id_anuncio] [int] NOT NULL,
	[imagem] [varchar](max) NOT NULL,
	[data_imagem] [datetime] NOT NULL,
	[url_imagem] [varchar](255) NOT NULL,
 CONSTRAINT [PK_imagem_anuncio] PRIMARY KEY CLUSTERED 
(
	[id_imagem] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lista_forma_pagamento]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lista_forma_pagamento](
	[id_forma_pagamento] [int] NOT NULL,
	[descricao] [varchar](40) NOT NULL,
 CONSTRAINT [PK_lista_forma_pagamento] PRIMARY KEY CLUSTERED 
(
	[id_forma_pagamento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lista_status]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lista_status](
	[id_status] [int] NOT NULL,
	[descricao_status] [varchar](40) NOT NULL,
 CONSTRAINT [PK_lista_status] PRIMARY KEY CLUSTERED 
(
	[id_status] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[mediacao_venda]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mediacao_venda](
	[id_mediacao] [int] NOT NULL,
	[id_anuncio] [int] NOT NULL,
	[id_usuario_reclamante] [int] NOT NULL,
	[data_mediacao] [datetime] NOT NULL,
	[assunto_mediacao] [varchar](30) NOT NULL,
	[descricao_reclamacao] [varchar](8000) NOT NULL,
	[data_previsao_resposta] [datetime] NOT NULL,
	[data_resposta] [datetime] NOT NULL,
	[descricao_resposta] [varchar](8000) NOT NULL,
 CONSTRAINT [PK_mediacao_venda] PRIMARY KEY CLUSTERED 
(
	[id_mediacao] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[transporte]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[transporte](
	[id_transporte] [int] NOT NULL,
	[descricao_transporte] [varchar](20) NOT NULL,
 CONSTRAINT [PK_transporte_1] PRIMARY KEY CLUSTERED 
(
	[id_transporte] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[transporte_anuncio]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[transporte_anuncio](
	[id_transporte_anuncio] [int] NOT NULL,
	[id_transporte] [int] NOT NULL,
	[id_anuncio] [int] NOT NULL,
	[numero_assento] [numeric](2, 0) NOT NULL,
	[nome_passageiro] [varchar](50) NOT NULL,
	[numero_documento] [varchar](14) NOT NULL,
	[qual_documento] [smallint] NOT NULL,
 CONSTRAINT [PK_transporte] PRIMARY KEY CLUSTERED 
(
	[id_transporte_anuncio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[venda_anuncio]    Script Date: 09/10/2022 19:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[venda_anuncio](
	[id_venda] [int] NOT NULL,
	[id_cliente] [int] NOT NULL,
	[id_anuncio] [int] NOT NULL,
	[data_venda] [datetime] NOT NULL,
	[data_pagamento] [datetime] NOT NULL,
	[quantidade] [smallint] NOT NULL,
	[valor_pacote] [money] NOT NULL,
	[valor_total] [money] NOT NULL,
	[id_forma_pagamento] [int] NOT NULL,
	[id_status_venda] [int] NOT NULL,
	[numero_parcela] [numeric](2, 0) NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[anuncio]  WITH CHECK ADD  CONSTRAINT [FK_anuncio_conta_usuario] FOREIGN KEY([id_conta_usuario])
REFERENCES [dbo].[conta_usuario] ([id_conta_usuario])
GO
ALTER TABLE [dbo].[anuncio] CHECK CONSTRAINT [FK_anuncio_conta_usuario]
GO
ALTER TABLE [dbo].[anuncio]  WITH CHECK ADD  CONSTRAINT [FK_anuncio_transporte] FOREIGN KEY([id_transporte])
REFERENCES [dbo].[transporte] ([id_transporte])
GO
ALTER TABLE [dbo].[anuncio] CHECK CONSTRAINT [FK_anuncio_transporte]
GO
ALTER TABLE [dbo].[imagem_anuncio]  WITH CHECK ADD  CONSTRAINT [FK_imagem_anuncio_anuncio] FOREIGN KEY([id_anuncio])
REFERENCES [dbo].[anuncio] ([id_anuncio])
GO
ALTER TABLE [dbo].[imagem_anuncio] CHECK CONSTRAINT [FK_imagem_anuncio_anuncio]
GO
ALTER TABLE [dbo].[mediacao_venda]  WITH CHECK ADD  CONSTRAINT [FK_mediacao_venda_anuncio] FOREIGN KEY([id_anuncio])
REFERENCES [dbo].[anuncio] ([id_anuncio])
GO
ALTER TABLE [dbo].[mediacao_venda] CHECK CONSTRAINT [FK_mediacao_venda_anuncio]
GO
ALTER TABLE [dbo].[mediacao_venda]  WITH CHECK ADD  CONSTRAINT [FK_mediacao_venda_conta_usuario] FOREIGN KEY([id_usuario_reclamante])
REFERENCES [dbo].[conta_usuario] ([id_conta_usuario])
GO
ALTER TABLE [dbo].[mediacao_venda] CHECK CONSTRAINT [FK_mediacao_venda_conta_usuario]
GO
ALTER TABLE [dbo].[transporte_anuncio]  WITH CHECK ADD  CONSTRAINT [FK_transporte_anuncio] FOREIGN KEY([id_anuncio])
REFERENCES [dbo].[anuncio] ([id_anuncio])
GO
ALTER TABLE [dbo].[transporte_anuncio] CHECK CONSTRAINT [FK_transporte_anuncio]
GO
ALTER TABLE [dbo].[transporte_anuncio]  WITH CHECK ADD  CONSTRAINT [FK_transporte_anuncio_transporte] FOREIGN KEY([id_transporte])
REFERENCES [dbo].[transporte] ([id_transporte])
GO
ALTER TABLE [dbo].[transporte_anuncio] CHECK CONSTRAINT [FK_transporte_anuncio_transporte]
GO
ALTER TABLE [dbo].[venda_anuncio]  WITH CHECK ADD  CONSTRAINT [FK_venda_anuncio_anuncio] FOREIGN KEY([id_anuncio])
REFERENCES [dbo].[anuncio] ([id_anuncio])
GO
ALTER TABLE [dbo].[venda_anuncio] CHECK CONSTRAINT [FK_venda_anuncio_anuncio]
GO
ALTER TABLE [dbo].[venda_anuncio]  WITH CHECK ADD  CONSTRAINT [FK_venda_anuncio_conta_usuario] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[conta_usuario] ([id_conta_usuario])
GO
ALTER TABLE [dbo].[venda_anuncio] CHECK CONSTRAINT [FK_venda_anuncio_conta_usuario]
GO
ALTER TABLE [dbo].[venda_anuncio]  WITH CHECK ADD  CONSTRAINT [FK_venda_anuncio_lista_forma_pagamento] FOREIGN KEY([id_forma_pagamento])
REFERENCES [dbo].[lista_forma_pagamento] ([id_forma_pagamento])
GO
ALTER TABLE [dbo].[venda_anuncio] CHECK CONSTRAINT [FK_venda_anuncio_lista_forma_pagamento]
GO
ALTER TABLE [dbo].[venda_anuncio]  WITH CHECK ADD  CONSTRAINT [FK_venda_anuncio_lista_status] FOREIGN KEY([id_status_venda])
REFERENCES [dbo].[lista_status] ([id_status])
GO
ALTER TABLE [dbo].[venda_anuncio] CHECK CONSTRAINT [FK_venda_anuncio_lista_status]
GO
